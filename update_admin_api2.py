import os
import re

filepath = 'app/api/admin/route.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the data fetching part
old_fetch = re.search(r"// Fetch learning history for all users.*?return {.*?historyCount: userHistory\.length,.*?weaknesses: \[\] // Weaknesses are currently not stored in a database table in this project.*?};\n    }\);", content, re.DOTALL)

if old_fetch:
    new_fetch = """// Fetch learning history for all users
    const { data: history, error: historyError } = await supabaseAdmin
      .from('learning_history')
      .select('id, user_id, content_type');

    if (historyError) throw historyError;
    
    // Fetch weakness records for all users
    const { data: weaknessRecords, error: weaknessError } = await supabaseAdmin
      .from('weakness_records')
      .select('user_id, category_name');
      
    if (weaknessError) throw weaknessError;

    // Aggregate data
    const aggregatedUsers = users.map(user => {
      const userHistory = history.filter(h => h.user_id === user.id);
      
      // Get unique weakness categories for this user
      const userWeaknesses = weaknessRecords.filter(w => w.user_id === user.id);
      const uniqueWeaknesses = Array.from(new Set(userWeaknesses.map(w => w.category_name)));
      
      return {
        ...user,
        historyCount: userHistory.length,
        weaknesses: uniqueWeaknesses
      };
    });"""

    content = content.replace(old_fetch.group(0), new_fetch)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Updated admin API route!")
else:
    print("Could not find the block to replace")
