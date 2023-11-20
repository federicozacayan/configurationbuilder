import Request from './request/Request';
import Header from './header/Header';
import Mapping from './mapping/Mapping';
import Body from './body/Body';
import Steps from './steps/Steps';
import Parameters from './parameters/Parameters';
import Empty from './empty/Empty';

const pages = {
    "Request": <Request />,
    "Header": <Header />,
    "Body": <Body />,
    "Steps": <Steps />,
    "Mapping": <Mapping />,
    "Parameters": <Parameters />,
    "Empty": <Empty />,
};

export default pages;
