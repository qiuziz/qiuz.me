import {observable, action} from 'mobx';
import { Resource } from '../../service/resource';

class articleStoreClass {
	@observable bolgList: any[] = [];

	@action getBlogList = () => {
		Resource.bloglist.get().then((res: any) => {
			console.log(res);
			if (res && res.list) {
				this.bolgList = res.list;
			}
		})
	}
}
export const articleStore = new articleStoreClass();