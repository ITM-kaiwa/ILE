'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Printer, Download, Save, X, Edit2, ArrowLeft } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingUser, setEditingUser] = useState<any>(null);

  useEffect(() => {
    const pwd = sessionStorage.getItem('admin_pwd');
    if (!pwd) {
      router.push('/');
      return;
    }

    fetch(`/api/admin?password=${encodeURIComponent(pwd)}`)
      .then(res => {
        if (!res.ok) throw new Error('Unauthorized or API Error');
        return res.json();
      })
      .then(data => {
        if (data.users) {
          setUsers(data.users);
        } else {
          throw new Error('Failed to load users');
        }
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [router]);

  const handlePrint = () => {
    window.print();
  };

  const handleExportCSV = () => {
    if (users.length === 0) return;
    const headers = ['ID', 'Name', 'Gender', 'Class', 'Email', 'Learning History Count', 'Weaknesses'];
    const csvContent = [
      headers.join(','),
      ...users.map(u => [
        u.id,
        `"${u.name || ''}"`,
        u.gender || '',
        `"${u.class_name || ''}"`,
        `"${u.email || ''}"`,
        u.historyCount,
        `"${(u.weaknesses || []).join('; ')}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `ile_vak_students_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveEdit = async () => {
    if (!editingUser) return;
    const pwd = sessionStorage.getItem('admin_pwd');
    
    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password: pwd,
          id: editingUser.id,
          name: editingUser.name,
          gender: editingUser.gender,
          class_name: editingUser.class_name,
          email: editingUser.email
        })
      });

      if (!res.ok) throw new Error('Failed to update');
      
      const { user: updatedUser } = await res.json();
      
      setUsers(users.map(u => u.id === updatedUser.id ? { ...u, ...updatedUser } : u));
      setEditingUser(null);
      alert('保存しました (Saved successfully)');
    } catch (err: any) {
      alert('Error: ' + err.message);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-slate-50"><p>Loading...</p></div>;
  if (error) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <p className="text-red-500 font-bold mb-4">{error}</p>
      <button onClick={() => router.push('/')} className="px-4 py-2 bg-slate-200 rounded">ホームに戻る</button>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div>
            <div className="flex items-center space-x-3 mb-1">
              <button onClick={() => router.push('/')} className="p-2 hover:bg-slate-100 rounded-full transition">
                <ArrowLeft className="w-5 h-5 text-slate-500" />
              </button>
              <h1 className="text-2xl font-bold text-slate-800">Admin Dashboard</h1>
            </div>
            <p className="text-slate-500 text-sm ml-11">学生の学習データとプロフィール管理</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={handlePrint} className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl transition font-medium text-sm border border-slate-300">
              <Printer className="w-4 h-4" />
              <span>印刷 (Print)</span>
            </button>
            <button onClick={handleExportCSV} className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition font-medium text-sm shadow-sm">
              <Download className="w-4 h-4" />
              <span>CSV出力 (Export)</span>
            </button>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-sm text-slate-600 font-semibold">
                  <th className="p-4">Student ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Gender</th>
                  <th className="p-4">Class</th>
                  <th className="p-4">Email</th>
                  <th className="p-4 text-center">History Count</th>
                  <th className="p-4">Weaknesses</th>
                  <th className="p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {users.map(user => (
                  <tr key={user.id} className="hover:bg-slate-50 transition">
                    <td className="p-4 font-mono text-xs text-slate-500">{user.id}</td>
                    <td className="p-4 font-medium text-slate-800">{user.name || '-'}</td>
                    <td className="p-4 text-slate-600">{user.gender || '-'}</td>
                    <td className="p-4 text-slate-600">{user.class_name || '-'}</td>
                    <td className="p-4 text-slate-600">{user.email || '-'}</td>
                    <td className="p-4 text-center font-bold text-orange-600">{user.historyCount}</td>
                    <td className="p-4 text-slate-500">{(user.weaknesses && user.weaknesses.length > 0) ? user.weaknesses.join(', ') : 'なし'}</td>
                    <td className="p-4 text-center">
                      <button 
                        onClick={() => setEditingUser(user)}
                        className="p-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg transition"
                        title="Edit Student"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={8} className="p-8 text-center text-slate-500">
                      データがありません。
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Edit Modal */}
        {editingUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-fade-in">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl overflow-hidden">
              <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                <h3 className="font-bold text-lg text-slate-800">学生情報の編集</h3>
                <button onClick={() => setEditingUser(null)} className="p-2 hover:bg-slate-100 rounded-full text-slate-500">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input type="text" value={editingUser.name || ''} onChange={e => setEditingUser({...editingUser, name: e.target.value})} className="w-full border border-slate-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Gender</label>
                  <select value={editingUser.gender || ''} onChange={e => setEditingUser({...editingUser, gender: e.target.value})} className="w-full border border-slate-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none">
                    <option value="">未設定</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Class</label>
                  <input type="text" value={editingUser.class_name || ''} onChange={e => setEditingUser({...editingUser, class_name: e.target.value})} className="w-full border border-slate-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                  <input type="email" value={editingUser.email || ''} onChange={e => setEditingUser({...editingUser, email: e.target.value})} className="w-full border border-slate-300 rounded-lg p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
                </div>
              </div>
              <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
                <button onClick={() => setEditingUser(null)} className="px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-100 transition font-medium">キャンセル</button>
                <button onClick={handleSaveEdit} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  <span>保存する</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
