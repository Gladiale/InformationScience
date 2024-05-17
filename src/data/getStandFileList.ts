import { type GetListType } from "../types/getListType";

// 立ち絵のファイルリスト
let standFileList: string[];
const getStandList: GetListType = (folderName) => {
  switch (folderName) {
    case "01":
      standFileList = [
        "001.png",
        "002.png",
        "003.png",
        "004.png",
        "005.png",
        "006.png",
        "007.png",
        "008.png",
        "009.png",
        "010.png",
        "011.png",
        "012.png",
        "013.png",
        "014.png",
        "015.png",
        "016.png",
      ];
      return standFileList;

    case "02":
      standFileList = [
        "001.png",
        "002.png",
        "003.png",
        "004.png",
        "005.png",
        "006.png",
        "007.png",
        "008.png",
        "009.png",
        "010.png",
        "011.png",
        "012.png",
        "013.png",
        "014.png",
        "015.png",
        "016.png",
        "017.png",
        "018.png",
        "019.png",
        "020.png",
        "021.png",
        "022.png",
        "023.png",
        "024.png",
        "025.png",
        "026.png",
      ];
      return standFileList;

    case "03":
      standFileList = [
        "001.png",
        "002.png",
        "003.png",
        "004.png",
        "005.png",
        "006.png",
        "007.png",
        "008.png",
        "009.png",
        "010.png",
        "011.png",
        "012.png",
        "013.png",
        "014.png",
        "015.png",
        "016.png",
        "017.png",
        "018.png",
        "019.png",
        "020.png",
        "021.png",
      ];
      return standFileList;

    default:
      standFileList = [];
      return standFileList;
  }
};

export { getStandList };
