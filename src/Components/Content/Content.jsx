import React from 'react';
import PropTypes from 'prop-types';

Content.propTypes = {
    item: PropTypes.object
};

Content.defaultProps = {
    item: null
}

function Content(props) {
    const { item } = props;
    if (item !== null) {
        return (
            <div className="col-10">
                <div className="box">
                    <div className="top">
                        <h3 className="title">{item.title}</h3>
                        <p className="name">{item.company}</p>
                        <p className="date">{item.dates}</p>
                    </div>
                    <div className="center">
                        <p>{item.duties[0]}</p>
                        <p>{item.duties[1]}</p>
                        <p>{item.duties[2]}</p>
                    </div>
                    <div className="bottom text-center mt-52">
                        <button className="btn btn-info">More Info</button>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div>
                
            </div>
        );
    }
}

export default Content;