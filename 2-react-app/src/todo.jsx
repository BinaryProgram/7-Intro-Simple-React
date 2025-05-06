// Read only props Two way of conditional rendering

// props is read only
// export default function Todo(props) {
//   // error - props is immutable or read only
//   // const props.task = 'core concept of react';
//   return (
//     <div>
//       {" "}
//       <li>Current task - {props.task}</li>
//     </div>
//   );
// }

// but destructuring can do it
// Two way of conditional based rendering
/* export default function Todo({ task, isDone }) {
  //  task = "Upcoming react core concept";
  if (isDone) {
    return (
      <div>
        {" "}
        <li>Understand - {task}</li>
      </div>
    );
  }
  //  we can use else or direct return.
  //   else {
  //     return (
  //       <div>
  //         <li>Task - {task}</li>
  //       </div>
  //     );

  // or
  return (
    <div>
      <li>Task - {task}</li>
    </div>
  );
}
*/
// conditional rendering option-3 ternary
/*export default function Todo({ task, isDone }) {
  return (
    <div>
     
      <li>
        
        {isDone ? "finished" : "work on"} : {task}
      </li>
    </div>
  );
}
*/
// conditional rendering option-4 - &&
/*
export default function Todo({ task, isDone }) {
  return (
    <div>
      <li>
        {task} {isDone && ' : finished'}
      </li>
    </div>
  );
}
*/

// conditional rendering options-5 ||
/*
export default function Todo({ task, isDone }) {   
  return (
    <div>
      <li>
        {task} {isDone || ' : Working on'}
      </li>
    </div>
  );
}
*/

// conditionally assigning  jsx to a variable option-6
export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = (
      <div>
        <li>{task} : Finished</li>
      </div>
    );
  } else {
    listItem = <div> <li>{task} : work on</li></div>
  }
  return listItem;
}
