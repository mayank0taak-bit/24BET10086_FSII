import { useState } from 'react';
import './App.css';
import logo from './assets/hero.png';
import { useUser } from './hooks/useUser';

function App() {
  const { user } = useUser();
  const [selectedCourse, setSelectedCourse] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    { id: 1, title: 'React Basics', category: 'Frontend', description: 'Learn components and props.' },
    { id: 2, title: 'Node.js Essentials', category: 'Backend', description: 'Build server-side apps.' },
    { id: 3, title: 'Database Design', category: 'Database', description: 'Understand schema design.' },
    { id: 4, title: 'UI/UX Fundamentals', category: 'Design', description: 'Design user-friendly interfaces.' },
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="hero-section">
        <div className="hero-content">
          <div>
            <p className="eyebrow">Learning Platform</p>
            <h1>Welcome back, {user.name}!</h1>
            <p className="hero-description">Explore courses, track progress, and build your skills with our curated catalog.</p>
          </div>
          <img src={logo} alt="Learning illustration" className="hero-image" />
        </div>
      </header>

      <main className="content-grid">
        <section className="card">
          <div className="card-header">
            <h2>Course Catalog</h2>
            <input
              type="text"
              placeholder="Search courses"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
          <div className="courses-list">
            {filteredCourses.map(course => (
              <article key={course.id} className="course-card">
                <div>
                  <h3>{course.title}</h3>
                  <p>{course.category}</p>
                </div>
                <button onClick={() => setSelectedCourse(course.title)}>
                  {selectedCourse === course.title ? 'Selected' : 'Select'}
                </button>
              </article>
            ))}
          </div>
        </section>

        <aside className="card sidebar">
          <h2>Current Focus</h2>
          <p>{selectedCourse || 'Pick a course to begin your learning journey.'}</p>
          <div className="stats">
            <div>
              <strong>4</strong>
              <span>Courses</span>
            </div>
            <div>
              <strong>12</strong>
              <span>Modules</span>
            </div>
            <div>
              <strong>85%</strong>
              <span>Completion</span>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
