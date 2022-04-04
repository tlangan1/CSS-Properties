"use strict";

// This line of code executes when the page the script is loaded
addEventListener("load", onLoad);

// -------------------------------------------------------------
// The helper functions for the executable code above

// This function gets executed when the web page loading this script finishes loading
function onLoad(event) {
  // getProperty usage: cssGlobalProperties.getProperty("--some-property")
  // setProperty usage: cssGlobalProperties.setProperty("--some-property", "2")
  var cssGlobalProperties = CSSProperties(document.querySelector(":root"));

  document.querySelector("input").addEventListener("change", changeColor);
  // --------------------------------------------------
  // The helper functions for the executable code above
  function CSSProperties(element) {
    function getProperty(propertyName) {
      //   var rs = getComputedStyle(element);
      return getComputedStyle(element).getPropertyValue(propertyName);
    }
    function setProperty(propertyName, propertyValue) {
      element.style.setProperty(propertyName, propertyValue);
    }

    return {
      getProperty: getProperty,
      setProperty: setProperty,
    };
  }

  function changeColor() {
    cssGlobalProperties.setProperty("--some-property", this.value);
  }
}
