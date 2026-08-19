import os

filepath = 'app/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update fetchUserProfile to also fetch weakness_records
fetch_profile_str = """      const fetchUserProfile = async (userId: string) => {
        const pendingVak = localStorage.getItem('pending_vak_type');
        if (pendingVak) {
          const { error: updateError } = await supabase
            .from('profiles')
            .update({ primary_vak: pendingVak })
            .eq('id', userId);
          if (!updateError) {
            localStorage.removeItem('pending_vak_type');
          }
        }

        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single();
          
        if (data && !error) {
          setCurrentVak(data.primary_vak as VakType);
          setVakResult(data.vak_result);
        }
      };"""

new_fetch_profile_str = """      const fetchUserProfile = async (userId: string) => {
        const pendingVak = localStorage.getItem('pending_vak_type');
        if (pendingVak) {
          const { error: updateError } = await supabase
            .from('profiles')
            .update({ primary_vak: pendingVak })
            .eq('id', userId);
          if (!updateError) {
            localStorage.removeItem('pending_vak_type');
          }
        }

        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', userId)
          .single();
          
        if (data && !error) {
          setCurrentVak(data.primary_vak as VakType);
          setVakResult(data.vak_result);
        }

        // Load weakness records
        const { data: weaknessData } = await supabase
          .from('weakness_records')
          .select('*')
          .eq('user_id', userId)
          .order('created_at', { ascending: false });
        
        if (weaknessData) {
          const records: WeaknessRecord[] = weaknessData.map((d: any) => ({
            id: d.id,
            userId: d.user_id,
            topic: d.topic,
            category: d.category,
            categoryName: d.category_name,
            incorrectAnswer: d.incorrect_answer,
            correctAnswer: d.correct_answer,
            errorType: d.error_type,
            vakRecommendation: d.vak_recommendation,
            createdAt: d.created_at,
          }));
          setWeaknessRecords(records);
        }
      };"""

content = content.replace(fetch_profile_str, new_fetch_profile_str)

# 2. Update handleRecordWeakness to save to Supabase
handle_record_str = """  const handleRecordWeakness = (newRecord: WeaknessRecord) => {
    setWeaknessRecords((prev) => [newRecord, ...prev]);
  };"""

new_handle_record_str = """  const handleRecordWeakness = async (newRecord: WeaknessRecord) => {
    setWeaknessRecords((prev) => [newRecord, ...prev]);
    
    if (user) {
      await supabase.from('weakness_records').insert({
        user_id: user.id,
        topic: newRecord.topic,
        category: newRecord.category,
        category_name: newRecord.categoryName,
        incorrect_answer: newRecord.incorrectAnswer,
        correct_answer: newRecord.correctAnswer,
        error_type: newRecord.errorType,
        vak_recommendation: newRecord.vakRecommendation,
      });
    }
  };"""

content = content.replace(handle_record_str, new_handle_record_str)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated page.tsx")
