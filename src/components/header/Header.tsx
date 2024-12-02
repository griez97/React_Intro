import './Header.css'

const Header = () => {
    return ( 
        <>
        <nav className='navBar'>
            <div className='navIcon'>
                <img className='iconPicture' src="img/js.png" alt="" />
            </div>
            <div className='anchor'>
                <a href="#">projects</a>
                <a href="#">skills</a>
                <a href="#">contact</a>
            </div>
        </nav>
        <section className='headerIntro'>
            <h1>Hi, I am Daniel (not) Smith</h1>
            <h3>a Frond End Developer</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium sit iusto officiis aliquid facilis, at maxime porro. Dicta, nihil architecto adipisci ab eius exercitationem, distinctio error molestiae ipsa minima ut incidunt aperiam sequi et, obcaecati blanditiis. Deserunt dolor, id iure, modi sapiente molestiae sed consequatur ad vitae, nisi soluta asperiores?
            </p>
            <button>resume</button>
        </section>
        </>
    );
}

export default Header;