import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Head from 'next/head';

export default function CreativeBlog() {
  const [currentSection, setCurrentSection] = useState('home');

  const blogPosts = [
    {
      id: 1,
      title: 'The Art of Digital Expression',
      excerpt: 'Exploring how creativity thrives in digital spaces and what it means to create in the modern world.',
      date: 'June 30, 2026',
      readTime: '5 min read',
      color: '#7F77DD'
    },
    {
      id: 2,
      title: 'Finding Inspiration in Everyday Moments',
      excerpt: 'Small observations, big ideas. How to train your eye to see the extraordinary in the ordinary.',
      date: 'June 30, 2026',
      readTime: '7 min read',
      color: '#1D9E75'
    },
    {
      id: 3,
      title: 'The Creative Process Unveiled',
      excerpt: 'A deep dive into how artists, designers, and creators develop their unique voice and perspective.',
      date: 'June 30, 2026',
      readTime: '8 min read',
      color: '#D85A30'
    }
  ];

  return (
    <>
      <Head>
        <title>Creative Pulse - Stories from the creative frontier</title>
        <meta name="description" content="Thoughts on art, design, creativity, and the ideas that shape our visual world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div style={{ minHeight: '100vh', background: '#FAFAF9', color: '#1A1A1A', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
        <nav style={{ 
          borderBottom: '1px solid #E5E5E3', 
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px',
          background: '#FFFFFF'
        }}>
          <div style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.5px' }}>
            Creative Pulse
          </div>
          
          <div style={{ display: 'flex', gap: '2rem' }}>
            {[
              { label: 'Home', key: 'home' },
              { label: 'About', key: 'about' }
            ].map(item => (
              <button
                key={item.key}
                onClick={() => setCurrentSection(item.key)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: currentSection === item.key ? '#1A1A1A' : '#888888',
                  fontWeight: currentSection === item.key ? 500 : 400,
                  fontSize: '14px',
                  transition: 'color 0.2s'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
          
          {currentSection === 'home' && (
            <div style={{ animation: 'fadeIn 0.4s ease-in' }}>
              <div style={{ marginBottom: '4rem', paddingBottom: '2rem', borderBottom: '1px solid #E5E5E3' }}>
                <h1 style={{ 
                  fontSize: '48px', 
                  fontWeight: 500, 
                  lineHeight: 1.2, 
                  margin: '0 0 1rem 0',
                  maxWidth: '600px',
                  color: '#1A1A1A'
                }}>
                  Stories from the creative frontier
                </h1>
                <p style={{ 
                  fontSize: '18px', 
                  color: '#666666', 
                  margin: 0,
                  maxWidth: '500px',
                  lineHeight: 1.6
                }}>
                  Thoughts on art, design, creativity, and the ideas that shape our visual world.
                </p>
              </div>

              <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
                {blogPosts.map(post => (
                  <article 
                    key={post.id}
                    style={{
                      padding: '2rem',
                      background: '#FFFFFF',
                      borderRadius: '12px',
                      border: '1px solid #E5E5E3',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      borderLeft: `4px solid ${post.color}`
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <h2 style={{ 
                      fontSize: '22px', 
                      fontWeight: 500, 
                      margin: '0 0 0.75rem 0',
                      color: '#1A1A1A'
                    }}>
                      {post.title}
                    </h2>
                    <p style={{ 
                      fontSize: '16px', 
                      color: '#666666', 
                      margin: '0 0 1.5rem 0',
                      lineHeight: 1.6
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      gap: '1.5rem', 
                      fontSize: '13px',
                      color: '#999999',
                      alignItems: 'center'
                    }}>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <div style={{ marginLeft: 'auto' }}>
                        <ChevronRight size={18} color={post.color} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {currentSection === 'about' && (
            <div style={{ animation: 'fadeIn 0.4s ease-in', maxWidth: '700px' }}>
              <h1 style={{ 
                fontSize: '42px', 
                fontWeight: 500, 
                margin: '0 0 2rem 0',
                lineHeight: 1.2,
                color: '#1A1A1A'
              }}>
                About this space
              </h1>
              
              <div style={{ display: 'grid', gap: '2rem' }}>
                <section>
                  <h2 style={{ 
                    fontSize: '18px', 
                    fontWeight: 500, 
                    margin: '0 0 1rem 0',
                    color: '#1A1A1A'
                  }}>
                    Who I am
                  </h2>
                  <p style={{ 
                    fontSize: '16px', 
                    lineHeight: 1.8,
                    color: '#666666',
                    margin: 0
                  }}>
                    I'm a creative thinker passionate about design, art, and the stories we tell. This space is dedicated to exploring the intersection of creativity and culture—sharing insights, observations, and ideas that fuel artistic practice.
                  </p>
                </section>

                <section>
                  <h2 style={{ 
                    fontSize: '18px', 
                    fontWeight: 500, 
                    margin: '0 0 1rem 0',
                    color: '#1A1A1A'
                  }}>
                    What you'll find here
                  </h2>
                  <p style={{ 
                    fontSize: '16px', 
                    lineHeight: 1.8,
                    color: '#666666',
                    margin: 0
                  }}>
                    Essays and reflections on creative practice, visual culture, and the process of making. Each piece is an invitation to think differently about the art and design that surrounds us, and to cultivate your own creative voice.
                  </p>
                </section>

                <section style={{ 
                  padding: '2rem', 
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  border: '1px solid #E5E5E3'
                }}>
                  <h2 style={{ 
                    fontSize: '18px', 
                    fontWeight: 500, 
                    margin: '0 0 1rem 0',
                    color: '#1A1A1A'
                  }}>
                    Let's connect
                  </h2>
                  <p style={{ 
                    fontSize: '16px', 
                    lineHeight: 1.8,
                    color: '#666666',
                    margin: '0 0 1.5rem 0'
                  }}>
                    Interested in collaborating or just want to chat about creative work? I'd love to hear from you.
                  </p>
                  <a href="mailto:hello@example.com" style={{
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    background: '#7F77DD',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => e.target.style.opacity = '0.9'}
                  onMouseLeave={e => e.target.style.opacity = '1'}
                  >
                    Say hello
                  </a>
                </section>
              </div>
            </div>
          )}
        </div>

        <footer style={{ 
          borderTop: '1px solid #E5E5E3',
          padding: '2rem',
          marginTop: '4rem',
          textAlign: 'center',
          fontSize: '13px',
          color: '#888888',
          background: '#FFFFFF'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '1rem' }}>
              {[
                { label: 'Home', section: 'home' },
                { label: 'About', section: 'about' }
              ].map(item => (
                <button
                  key={item.section}
                  onClick={() => setCurrentSection(item.section)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: currentSection === item.section ? '#1A1A1A' : '#888888',
                    fontSize: '13px',
                    fontWeight: currentSection === item.section ? 500 : 400,
                    transition: 'color 0.2s'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p style={{ margin: 0 }}>© 2024 Creative Pulse. All rights reserved.</p>
          </div>
        </footer>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>
      </div>
    </>
  );
}
