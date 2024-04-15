import { commentsData } from "../utils/constants";

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div
      className="flex items-center bg-gray-100 rounded-lg mb-4 p-4 gap-4"
      key={data.id}
    >
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        width={32}
        alt="user image"
      />
      <div>
        <h4 className="font-sans font-semibold">{name}</h4>
        <p className="font-sans">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment.name}>
      <Comment data={comment} />
      <div className="ml-8 border-l-2 border-s-gray-300 rounded-t-lg">
        {comment.replies && comment.replies.length > 0 && (
          <CommentList comments={comment.replies} />
        )}
      </div>
    </div>
  ));
};

const Comments = () => {
  return (
    <div>
      <h2 className="font-sans font-bold text-2xl mb-4">Comments</h2>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default Comments;
