import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

const Index = () => {
    const engine = new Styletron();
    return {
        <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
                <Block color={'red'}>
                    mnskjsd
                </Block>
            </BaseProvider>
        </StyletronProvider >
    }
};

export default Index;
