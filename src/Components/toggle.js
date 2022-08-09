function Toggle() {
    return(
        <label class="switch">
          <input type="checkbox"></input>
          <span class="slider round" onClick={switchButton}></span>
        </label>
    );
}

function switchButton() {
    var element = document.body;
    element.classList.toggle("dark");
  }
  

export default Toggle;
