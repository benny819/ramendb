import React from 'react';

const Form = ({submitHandle, formchangehandle})=>{
  return (
    <div>
      <form id="userform" className="attendee-form" onSubmit={(e)=>{submitHandle(e)}}>
        <label> Ramen Name:
          <input type="text" name="ramen" required={true} onChange={formchangehandle} />
        </label>
        <label> Ramen Type:</label>
        <select id="type" name="type" form="type" onChange={formchangehandle}>
          <option value="ramen">Ramen (soup base)</option>
          <option value="tsukemen">Tsukemen</option>
          <option value="mazemen">Mazemen</option>
          <option value="salad">Ramen Salad</option>
        </select>
        <label> Soup Base:</label>
        <select id="base" name="soup" form="base" onChange={formchangehandle}>
          <option value="tonkotsu">Pork Bone</option>
          <option value="shoyu">Shoyu (Soy sauce)</option>
          <option value="shio">Shio (Salt)</option>
          <option value="miso">Miso</option>
          <option value="toripaitan">Toripaitan</option>
          <option value="tantan">TanTan</option>
          <option value="curry">Curry</option>
          <option value="other">Other</option>
          <option value="noSoup">No Soup</option>
        </select>
        <label> Score:</label>
        <select id="score" name="score" form="score" onChange={formchangehandle}>
          <option value="100">100 - Perfect</option>
          <option value="99">99</option>
          <option value="98">98</option>
          <option value="98">98</option>
          <option value="97">97</option>
          <option value="96">96</option>
          <option value="95">95</option>
          <option value="94">94</option>
          <option value="93">93</option>
          <option value="92">92</option>
          <option value="91">91</option>
          <option value="90">90</option>
          <option value="89">89</option>
          <option value="88">88</option>
          <option value="87">87</option>
          <option value="86">86</option>
          <option value="86">85</option>
          <option value="84">84</option>
          <option value="83">83</option>
          <option value="82">82</option>
          <option value="81">81</option>
          <option value="80">80</option>
          <option value="59">59 - not eatable</option>
        </select>
        <p>100 is the best, 59 is not eatable</p>
        <label> Reviews:
          <textarea rows="4" cols="50" name="comment" form="userform" placeholder="enterhere" onChange={formchangehandle}></textarea>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form;