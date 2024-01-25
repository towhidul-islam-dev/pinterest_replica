import React from "react";
import { createStore } from "redux";

const reducer = (state, action) =>{
}
function page() {
    const store = createStore(reducer,0);
	return <div>page</div>;
    
}

export default page;
