import React from 'react';
import {Link} from 'gatsby';

export function Layout({children}) {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to="/">index</Link>
          </li>

          <li>
            <Link to="/about">two</Link>
          </li>
        </ul>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}