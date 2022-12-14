import 'css/Global.css'
import 'css/About.css';
import Dropdown from "components/Dropdown"
import Texts from "static/about-page-texts.json"

function About() {
  return (
    <div className="About">
      <div className='AboutIllustration'></div>
      <Dropdown label="Fiabilit√©" isOpen="true" content={Texts[0]} />
      <Dropdown label="Respect" content={Texts[1]}/>
      <Dropdown label="Service" content={Texts[2]}/>
      <Dropdown label="Responsabilit√©" content={Texts[3]}/>
    </div>
  );
}

export default About;