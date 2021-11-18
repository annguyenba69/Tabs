import React from 'react';
import PropTypes from 'prop-types';

SideBar.propTypes = {
    list: PropTypes.array,
};

SideBar.defaultProps = {
    list: [],
}

function SideBar(props) {
    const { list, handleCompany } = props;
    return (
        <div className="col-2">
            <div className="tab">
                <div className="row">
                    {list.map((value, key) => (
                        <div className="col-12 text-center">
                            <button onClick={()=>handleCompany(key)} key={key} className="button">{value.company}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SideBar;