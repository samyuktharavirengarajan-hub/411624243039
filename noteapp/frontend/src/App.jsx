import { useEffect, useMemo, useState } from 'react';
import {
  CheckCircle2,
  ClipboardList,
  FileText,
  LayoutDashboard,
  Pencil,
  Pin,
  CheckCircle,
  Plus,
  Search,
  Sparkles,
  Trash2,
  X,
} from 'lucide-react';

const API_URL = 'http://localhost:8000/api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [showTasks, setShowTasks] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState({ type: '', text: '' });

  const today = useMemo(
    () =>
      new Intl.DateTimeFormat('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(new Date()),
    []
  );

  const loadTasks = async (term = '') => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/tasks?search=${encodeURIComponent(term)}`);
      if (!response.ok) throw new Error('Could not load tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      setNotice({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => loadTasks(search), 250);
    return () => clearTimeout(timer);
  }, [search]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.title.trim()) {
      setNotice({ type: 'error', text: 'Please enter a task title.' });
      return;
    }

    try {
      setLoading(true);
      const url = editingId ? `${API_URL}/tasks/${editingId}` : `${API_URL}/tasks`;
      const method = editingId ? 'PUT' : 'POST';
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Something went wrong');

      setForm({ title: '', description: '' });
      setEditingId(null);
      setNotice({ type: 'success', text: editingId ? 'Task updated successfully.' : 'Task added successfully.' });
      await loadTasks(search);
      setShowTasks(true);
    } catch (error) {
      setNotice({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setForm({ title: task.title, description: task.description || '' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm({ title: '', description: '' });
  };

  const deleteTask = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this task? This action cannot be undone.');
    if (!confirmed) return;

    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Could not delete task');
      setNotice({ type: 'success', text: 'Task deleted successfully.' });
      await loadTasks(search);
    } catch (error) {
      setNotice({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const togglePin = async (id) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}/pin`, {
      method: 'PUT',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || 'Could not pin task');
    }

    setNotice({
      type: 'success',
      text: data.pinned ? 'Task pinned.' : 'Task unpinned.',
    });

    await loadTasks(search);
  } catch (error) {
    setNotice({ type: 'error', text: error.message });
  }
};

const toggleComplete = async (id) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${id}/complete`, {
      method: 'PUT',
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || 'Could not update task');
    }

    setNotice({
      type: 'success',
      text: data.completed ? 'Task completed.' : 'Task marked as active.',
    });

    await loadTasks(search);
  } catch (error) {
    setNotice({ type: 'error', text: error.message });
  }
};

  return (
    <div className="app-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />

      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-icon"><Sparkles size={20} /></div>
          <div>
            <div className="brand">NOTE<span>APP</span></div>
            <div className="brand-subtitle">your daily productivity space</div>
          </div>
        </div>
        <div className="date-pill"><span className="live-dot" /> {today}</div>
      </header>

      <main className="container">
        <section className="hero">
          <div>
            <div className="eyebrow"><Sparkles size={14} /> STAY FOCUSED • GET THINGS DONE</div>
            <h1>Today's <span>Tasks</span></h1>
            <p>Capture your work, keep your priorities visible, and make today count.</p>
          </div>
          <div className="hero-decoration"><ClipboardList size={76} strokeWidth={1.1} /></div>
        </section>

        {notice.text && (
          <div className={`notice ${notice.type}`}>
            {notice.type === 'success' ? <CheckCircle2 size={18} /> : <X size={18} />}
            <span>{notice.text}</span>
            <button onClick={() => setNotice({ type: '', text: '' })}><X size={15} /></button>
          </div>
        )}

        <section className="dashboard-grid">
          <div className="form-card glass-card">
            <div className="card-heading">
              <div className="heading-icon"><Plus size={21} /></div>
              <div>
                <span className="small-label">{editingId ? 'EDIT TASK' : 'NEW TASK'}</span>
                <h2>{editingId ? 'Update your task' : 'What needs to be done?'}</h2>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <label>Task title</label>
              <input
                className="text-input"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="Enter the title for your task..."
                maxLength={255}
              />

              <label>Notes <span>(optional)</span></label>
              <textarea
                className="text-area"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Enter any additional details or reminders..."
                rows={5}
              />

              <div className="form-actions">
                {editingId && (
                  <button type="button" className="secondary-btn" onClick={cancelEdit}>Cancel</button>
                )}
                <button className="primary-btn" type="submit" disabled={loading}>
                  {editingId ? <Pencil size={17} /> : <Plus size={18} />}
                  {loading ? 'Saving...' : editingId ? 'Update Task' : 'Submit Task'}
                </button>
              </div>
            </form>
          </div>

          <button className={`count-card ${showTasks ? 'active' : ''}`} onClick={() => setShowTasks(!showTasks)}>
            <div className="count-top">
              <div className="count-icon"><LayoutDashboard size={22} /></div>
              <span className="click-hint">{showTasks ? 'HIDE TASKS' : 'VIEW TASKS'} ↗</span>
            </div>
            <div className="count-number">{tasks.length}</div>
            <div className="count-title">Total Tasks</div>
            <div className="count-description">{tasks.length === 0 ? 'Your task list is clear.' : 'Tap to see everything on your list.'}</div>
            <div className="progress-line"><span style={{ width: `${Math.min(tasks.length * 10, 100)}%` }} /></div>
          </button>
        </section>

        <section className={`tasks-section ${showTasks ? 'visible' : ''}`}>
          <div className="section-head">
            <div>
              <div className="small-label">TASK MANAGER</div>
              <h2>Your Tasks</h2>
            </div>
            <div className="search-box">
              <Search size={18} />
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search tasks..." />
              {search && <button onClick={() => setSearch('')}><X size={15} /></button>}
            </div>
          </div>

          {loading && tasks.length === 0 ? (
            <div className="empty-state"><div className="loader" /><p>Loading your tasks...</p></div>
          ) : tasks.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon"><FileText size={28} /></div>
              <h3>{search ? 'No matching tasks' : 'No tasks yet'}</h3>
              <p>{search ? 'Try another keyword.' : 'Add your first task above and start building your day.'}</p>
            </div>
          ) : (
            <div className="task-list">
              {[...tasks].sort((a, b) => Number(b.pinned) - Number(a.pinned)).map((task, index) => (
                <article className="task-card" key={task.id} onClick={() => setSelectedTask(task)}>
                  <div className="task-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="task-content">
                    <h3>{task.title}</h3>
                    {task.description && <p>{task.description}</p>}
                    <span className="task-time">Added {new Date(task.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                  </div>
                  <div className="task-actions">
                    <button className={`pin-btn ${task.pinned ? 'pinned' : ''}`} onClick={(e) => { e.stopPropagation(); togglePin(task.id); }} title={task.pinned ? 'Unpin task' : 'Pin task'}> <Pin size={17} strokeWidth={2.5} fill={task.pinned ? 'currentColor' : 'none'}/><span>{task.pinned ? 'Pinned' : 'Pin'}</span></button>
                    <button className={`complete-btn ${task.completed ? 'completed' : ''}`} onClick={(e) => { e.stopPropagation(); toggleComplete(task.id); }} title={task.completed ? 'Mark as active' : 'Mark as completed'}> <CheckCircle2 size={17} /> <span>{task.completed ? 'Completed' : 'Complete'}</span></button>
                    <button className="edit-btn" onClick={(e) => { e.stopPropagation(); startEdit(task);}} title="Update task"> <Pencil size={17} /> <span>Update</span> </button>
                    <button className="delete-btn" onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }} title="Delete task"> <Trash2 size={17} /> <span>Delete</span> </button>                  
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
      
      <footer>NOTEAPP <span>•</span> Built for better days</footer>

      {selectedTask && (
        <div
          className="task-modal-overlay"
          onClick={() => setSelectedTask(null)}
        >
          <div
            className="task-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedTask(null)}
            >
              <X size={20} />
            </button>

            <div className="modal-icon">
              <FileText size={26} />
            </div>

            <div className="small-label">TASK DETAILS</div>

            <h2>{selectedTask.title}</h2>

            {selectedTask.description ? (
              <p className="modal-description">
                {selectedTask.description}
              </p>
            ) : (
              <p className="modal-description empty-description">
                No notes added for this task.
              </p>
            )}

            <div className="modal-time">
              Added{' '}
              {new Date(selectedTask.created_at).toLocaleString('en-IN', {
                dateStyle: 'medium',
                timeStyle: 'short',
              })}
            </div>

            <div className="modal-actions">
              <button
                className="edit-btn"
                onClick={() => {
                  setSelectedTask(null);
                  startEdit(selectedTask);
                }}
              >
                <Pencil size={17} />
                Update
              </button>

              <button
                className="delete-btn"
                onClick={() => {
                  setSelectedTask(null);
                  deleteTask(selectedTask.id);
                }}
              >
                <Trash2 size={17} />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
