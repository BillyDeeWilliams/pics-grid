import React from 'react';

const Imagelist = (props) => {


        let images = props.images.map(({id, description, urls}) => {
            /*let ilStyles = {
                background : 'url(' + urls.regular + ')',
                backgroundSize : 'cover'
            }
            <div style={ilStyles} ></div>*/
                return <li key={id} ><img className="ui image ir" src={urls.regular} alt={description} /></li>
            });



        return (
            <div className="ui segment">
                <h2>Found {props.images.length} Images</h2>
                <ul className="ui gallery gridParent">
                    {images}
                </ul>
            </div>
        )
    };


export default Imagelist;
