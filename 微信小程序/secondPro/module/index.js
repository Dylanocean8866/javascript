import {Request} from "../utils/request.js"

class IndexModel extends Request{
    getArticleList(magazineId=0,start=0){
        return this.getData(`/getIndexArticleList/${magazineId}/${start}`);
    }
    getMarkList(magazineId=0,start=0){
        return this.getData(`/getMarkTypeList/${magazineId}`);
    }
    getRecommedInfo(magazineId=0,start=0){
        return this.getData(`/getRecommendInfo/${magazineId}`);
    }
}
export {IndexModel}