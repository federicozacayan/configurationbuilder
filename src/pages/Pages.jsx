import Request from './request/Request';
import Header from './header/Header';
import Mapping from './mapping/Mapping';
import Body from './body/Body';
import Steps from './steps/Steps';
import Parameters from './parameters/Parameters';
import Empty from './empty/Empty';
import MappingDetail from './mappingdetail/MappingDetail';
import Configuration from './configuration/Configuration';

const pages = {
    "Request": <Request />,
    "Header": <Header />,
    "Body": <Body />,
    "Steps": <Steps />,
    "Mapping": <Mapping />,
    "MappingDetails": <MappingDetail />,
    "Configuration": <Configuration />,
    "ParametersTODO": <Parameters />,
    "Empty": <Empty />,
};

export default pages;
