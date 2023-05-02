/**********************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
***********************************************************************/

( function(){
  var s = document.getElementById( 'uc-preload-script' ).src;
  var i = document.createElement( 'iframe' );
  i.style.visibility = 'hidden';
  i.style.height = '0px';
  i.style.width = '0px';
  i.style.position = 'absolute';
  i.src = s.replace( '/uc-preload.js', '/preload/' );
  document.body.appendChild( i );
})();
