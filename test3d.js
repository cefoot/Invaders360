import * as React from 'react';
import { Animated, View } from 'react-360';
import Entity from 'Entity';
import AmbientLight from 'AmbientLight';
import PointLight from 'PointLight';

const AnimatedEntity = Animated.createAnimatedComponent(Entity);

/**
 * Renders the actual model in 3D space, rotating it a full 360 degrees to show
 * it from all angles.
 */
export default class ModelView extends React.Component {
    rotation = new Animated.Value(0);

    componentDidMount() {
        this.rotation.setValue(0);
        Animated.timing(this.rotation, { toValue: 360, duration: 20000 }).start();
    }

    render() {
        return (
            <View>
                <AmbientLight intensity={1.0} color={'#ffffff'} />
                <PointLight
                    intensity={0.4}
                    style={{ transform: [{ translate: [0, 4, -1] }] }}
                />
                <AnimatedEntity
                    style={
                        {
                            // width: 50, not working
                            transform: [
                                { rotateY: this.rotation },
                                { rotateX: 90 }
                            ]
                        }
                    }
                    source={{
                        // obj: asset('Invader.obj'),
                        // mtl: asset('Invader.mtl'),
                        obj: 'http://192.168.178.75:8081/static_assets/Invader.obj',
                        mtl: 'http://192.168.178.75:8081/static_assets/Invader.mtl',
                    }}
                />
            </View>
        );
    }
}

// const ConnectedModelView = connect(test3d);

// export default ConnectedModelView;