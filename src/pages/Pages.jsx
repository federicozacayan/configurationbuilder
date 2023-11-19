import Request from './request/Request';
import Header from './header/Header';
import Mapping from './mapping/Mapping';
import Body from './body/Body';
import Actions from './actions/Actions';
import Parameters from './parameters/Parameters';

const pages = {
    "Request": <Request />,
    "Header": <Header />,
    "Mapping": <Mapping />,
    "Actions": <Actions />,
    "Parameters": <Parameters />,
    "Body": <Body />,
};

export default pages;
