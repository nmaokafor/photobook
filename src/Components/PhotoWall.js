import React from "react";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//anchor tag, href attribute
function PhotoWall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto">
        {" "}
      </Link>
      <div className="photoGrid">
        {props.posts
          .sort(function(x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              key={index}
              post={post}
              onRemovePhoto={props.onRemovePhoto}
            />
          ))}
      </div>
    </div>
  );
}
PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
};
export default PhotoWall;
