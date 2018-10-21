const FIXED_DELAY = 1000;

export const asyncResponse = (response, body) =>
  new Promise(resolve => {
    const timeout = Math.floor(Math.random() * 500);
    setTimeout(() => {
      response.status(200).json(body);
      resolve();
    }, FIXED_DELAY + timeout);
  });

const FS_SAMPLE = {
  files: ["lwjgl.zip"],
  folders: {
    android: {
      files: ["gears-debug.apk", "hellovulkan-debug.apk", "lwjgl.aar"],
      folders: {
        "arm64-v8a": {},
        "armeabi-v7a": {}
      }
    },
    bin: {
      files: ["LICENSE", "build.txt"],
      folders: {
        "lwjgl-assimp": {},
        "lwjgl-bgfx": {},
        "lwjgl-egl": {},
        "lwjgl-glfw": {},
        "lwjgl-jawt": {},
        "lwjgl-jemalloc": {}
      }
    },
    linux: {
      folders: {
        x64: {}
      }
    },
    macosx: {
      folders: {
        x64: {}
      }
    },
    windows: {
      folders: {
        x86: {},
        x64: {}
      }
    }
  }
};

const RELEASES = [
  "3.0.0",
  "3.0.0a",
  "3.0.0b",
  "3.1.0",
  "3.1.1",
  "3.1.2",
  "3.1.3",
  "3.1.4",
  "3.1.5",
  "3.1.6",
  "3.2.0",
  "latest"
].reduce((acc, v) => {
  acc[v] = FS_SAMPLE;
  return acc;
}, {});

const DATA = {
  folders: {
    release: {
      folders: RELEASES
    },
    stable: FS_SAMPLE,
    nightly: FS_SAMPLE
  }
};

export const fsPathContents = async (request, response) => {
  const path = request.query.path;
  const dataPath = path
    ? path
        .split("/")
        .filter(Boolean)
        .reduce((acc, v) => acc.folders[v], DATA)
    : DATA;

  const responseData = {
    files: dataPath.files || [],
    folders: Object.keys(dataPath.folders || []).map(v => v + "/")
  };

  await asyncResponse(response, responseData);
};
