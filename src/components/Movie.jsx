function Movie(props) {
    const {
        Title: title,
        Year: year, 
        imdbId: id, 
        Type: type, 
        Poster: poster
    } = props;

    return <div id={id} className="card">
            <div className="card-image">
                {
                    poster === 'N/A' ?
                            <img src={`https://via.placeholder.com/300x400?text=V${title}`}/>
                        :
                            <img src={poster}/>
                }
            <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
            <p>{year} year, <span>{type}</span></p>
            </div>
      </div>
}

export {Movie}