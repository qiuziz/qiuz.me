import {observable, action} from 'mobx';
import { Resource } from '../../service/resource';

class homeStoreClass {
	@observable bolgList: any[] = [];

	@action getBlogList = () => {
		Resource.blogList.get().then((res: any) => {
			console.log(res);
			this.bolgList = res.data || [];
		})
	}
}
export const homeStore = new homeStoreClass();