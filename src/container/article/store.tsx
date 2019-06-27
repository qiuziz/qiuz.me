import {observable, action} from 'mobx';
import { Resource } from '../../service/resource';

class articleStoreClass {
	@observable article: any = {};

	@action getBlog = (id: string) => {
		Resource.getBlog.post({}, {id: id}).then((res: any) => {
			console.log(res);
			if (res) {
				this.article = res.data;
			}
		})
	}

	@action setArticle = (data: object) => {
		this.article = data;
	}
}
export const articleStore = new articleStoreClass();