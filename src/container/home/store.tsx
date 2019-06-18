import {observable, computed, action, autorun} from 'mobx';
import { Resource } from '../../service/resource';

class homeStoreClass {
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
export const homeStore = new homeStoreClass();