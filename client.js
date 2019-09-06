// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
  ReactInstance,
  Location,
  Surface,
} from 'react-360-web';

const invaderSurface = new Surface(
  4096,
  800,
  Surface.SurfaceShape.Cylinder
);

const menuSurface = new Surface(
  4096,
  700,
  Surface.SurfaceShape.Cylinder
);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  // Render your app content to the default cylinder surface
  menuSurface.setRadius(3.5);
  menuSurface.setDensity(4096);
  r360.renderToSurface(
    r360.createRoot('Invaders360', { /* initial props */ }),
    menuSurface,
    'menu'
  );

  invaderSurface.setDensity(4096);
  invaderSurface.setRadius(4);
  r360.renderToSurface(
    r360.createRoot('InvaderComponent', { /* initial props */ }),
    invaderSurface,
    'invader'
  );

  r360.renderToLocation(
    r360.createRoot('ModelView'),
    new Location([0, 120, -900]),
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('YIVR_Stitch_0839_360.jpg'));
}

window.React360 = {init};
