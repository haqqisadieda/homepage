import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderConfig({ type: "js" });
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

export function loadGLTFModel(
  scene,
  glbPath,
  options = { recieveShadow: true, castShadow: true },
) {
  const { recieveShadow, castShadow } = options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load(
      glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "dog";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.recieveShadow = recieveShadow;
        obj.castShadow = castShadow;
        scene.add(obj);

        obj.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = castShadow;
            child.recieveShadow = recieveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      },
    );
  });
}
