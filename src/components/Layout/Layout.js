import React, { Fragment, PureComponent } from 'react';
import SectionTitle from './../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {
  renderHeader = Children => (
    <header className="header">
      <SectionTitle className="header__title">Header</SectionTitle>
      {Children && (<div className="header__content"><Children/></div>)}
    </header>
  )

  renderFooter = Children => (
    <footer className="footer">
      <p className="header__title section-title">Footer</p>
      <Children/>
    </footer>
  )

  render() {
    const {header, footer, children} = this.props

    return (
      <Fragment>
        { header && this.renderHeader(header) }

        <main 
          className={`
            main 
            ${header ? 'main--with-header' : ''} 
            ${footer ? 'main--with-footer' : ''} 
          `}
        >
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>

        { footer && this.renderFooter(footer) }
      </Fragment>
    )
  }
}

export default Layout;
