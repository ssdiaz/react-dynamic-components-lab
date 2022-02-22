//your code here

import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            <div className="comment">                
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment;



// SOLUTION
// import React, { Component } from 'react'


// export default class Comment extends Component {
//   render() {
//     return (
//       <div className="comment">
//         {this.props.commentText}
//       </div>
//     )
//   }
// }