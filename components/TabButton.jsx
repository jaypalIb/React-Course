// export default function TabButton({children}) {
//   // function handleClick() {
//   //   console.log(children + ' Clicked');
//   // }
//   function handleClick() {
//     alert('Hello i am  ' + children);
//   }
//   return (
//     <li id="tab"><button  onClick={handleClick}>{children}</button></li>
//   );
// }

export default function TabButton({children,onSelect}) {
  console.log('TAB BUTTON COMPONENT EXICUTING');
  return (
    <li><button onClick={onSelect}>{children}</button></li>
  )
}