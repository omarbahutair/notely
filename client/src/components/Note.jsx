import '../styles/index.css';
import React from 'react';
import { connect } from 'react-redux';

function Note({ note, auth }) {
  return (
    <div className="note-container">
      <div
        className={`group note p-4 rounded-md flex gap-3 items-center ${
          note.creatorId._id === auth ? 'bg-yellow-200' : 'bg-white'
        }`}
      >
        <div className="flex-1">
          <h1 className="text-2xl mb-2">{note.title}</h1>
          <p className="text-lg mb-4">{note.content}</p>
          <p className="text-lg italic text-gray-500">
            create by {note.creatorId.name}
          </p>
        </div>
        <div>
          <i className="text-gray-400 cursor-pointer hover:text-gray-500 fa-solid fa-pen edit-button md:opacity-0 md:group-hover:opacity-100"></i>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps)(Note);