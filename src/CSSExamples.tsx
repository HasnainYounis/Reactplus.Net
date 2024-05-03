// import './cssExample.css';
import css from './CSSExample.module.css';
export default function CSSExample(){
    const square={
        backgroundColor: 'green',
        height: '50px',
        width: '50px',
        marginLeft:'1rem'
    };
    return(
        <>
        <h1 className="red">CSS Examples</h1>
        <h2 style={{color:'blue',fontSize:'25px'}}>Subtext</h2>
        <div style={square}></div>
        <br />
        <div style={square}>squre</div>
        <br />
        <h2 className={css['primary-color']}>this is module styled text</h2>
        <h2 className="primary-color">this is not module styled text</h2>
        </>
    )
}