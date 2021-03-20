import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard"
import faker from "faker";

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning!!</h4>
					Are you sure?
				</div>
			</ApprovalCard>
      <ApprovalCard>
				<CommentDetail
					author="Bob"
					postTime="Today 5:00PM"
					comment={faker.lorem.sentence()}
					imgSource={faker.image.image()}
					/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Sam"
					postTime="Yesterday 9:00PM"
					comment={faker.lorem.sentence()}
					imgSource={faker.image.image()}
					/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Jane"
					postTime="2 days ago 4:23AM"
					comment={faker.lorem.sentence()}
					imgSource={faker.image.image()}
					/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					author="Mary"
					postTime="1 moth ago"
					comment={faker.lorem.sentence()}
					imgSource={faker.image.image()}
					/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
