function Characters(props) {
    const data = props.data;
    return(
        <>
        <div className="row container-fluid">
        {
            data.map((item, index) => (
                    <div className="col-lg-4 col-sm-6 p-4" key={index}>
                        <div className="text-center border rounded shadow">
                            <img src={item.image} className="img-fluid rounded-circle mt-4" alt={item.name} />
                            <h4 className="mt-2 mb-4 text-secondary">{item.name}</h4>
                        </div>
                    </div>
            ))
        }
        </div>
        </>
    );
}

export {Characters};