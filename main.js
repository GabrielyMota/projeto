// function handleCredentialResponse(response) {
//     const data = jwt_decode(response.credential);
// }
// window.onload = function () {
//     google.accounts.id.initialize({
//         client_id: "264399802675-1mq3uchsicog31tq9f4uc71vo2m09gpd.apps.googleusercontent.com",
//         callback: handleCredentialResponse
//     });
//     google.accounts.id.renderButton(
//         document.getElementById("buttonDiv"),
//         { theme: "filled_black", 
//         size: "large", 
//         type: "standard",
//         shape: "pill",
//         text: "$ {button.text}",
//         logo_alignment: "left",
//         width: "466"}  // customization attributes
//     );
//     google.accounts.id.prompt(); // also display the One Tap dialog
// }