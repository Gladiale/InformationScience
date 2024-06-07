import { getFileList, getFolderList } from "../../../../helper/dataObjControl";
import { type MediaInfoType } from "../../mediaInfo";
import { getTargetFunc } from "./getTargetFunc";

type ChangeTargetType = "stand" | "cg" | "video" | "voice" | "effect";

const folderFirstFunc = (state: MediaInfoType, target: ChangeTargetType) => {
  const [dataObj, targetFolder, targetFile] = getTargetFunc(target);

  const folderList: string[] = getFolderList(dataObj);
  const folderIndex = 0;
  const folderName = folderList[folderIndex];

  const fileList: string[] = getFileList(dataObj, folderName);

  return {
    ...state,
    folder: { ...state.folder, [targetFolder]: [folderIndex, folderName] },
    file: { ...state.file, [targetFile]: [0, fileList[0]] },
  };
};

export { folderFirstFunc };
