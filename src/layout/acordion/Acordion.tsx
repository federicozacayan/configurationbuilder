import React from 'react'

export default function Acordion() {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <b>Configurable web service client #1</b>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <h3>Configurable Web Service Client</h3>
                            <p>
                                This application creates a JSON file that contains configurations for interacting with various web services.
                            </p>

                            <h3>Store Responses for Future Requests</h3>
                            <p>
                                The backend application utilizes the configuration file to execute queries to web services.
                                <br /> The responses are stored and made available for subsequent queries to other services.
                            </p>

                            <h3>Mapping Field to Field</h3>
                            <p>
                                Notably, the configuration includes data mapping rules using JSONPath.
                                This allows certain fields from one query to be used in making subsequent queries.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <b>Steps To Follow #2</b>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <ul>
                                <li>Create Request (URL, Method, Protocol, Port, etc.)</li>
                                <li>Configure Headers (Content Type, Tokens, etc.)</li>
                                <li>Configure Body (JSON or Plain Text)</li>
                                <li>Create and Organize Steps (Specify the order of requests)</li>
                                <li>Create Mappings (Define field-to-field relationships)</li>
                                <li>Add a Mapping a new Step</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <b>Use the configuration to process the flow #3</b>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            The Json Created in this aplication should be used as a configuration to request the <b>Backend Aplication</b> that will run all the flow disigned automaticaly.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
