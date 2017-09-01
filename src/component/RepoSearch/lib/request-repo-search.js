/**
 * @description - repo search request remote API
 * @author - huang.jian <hjj491229492@hotmail.com>
 */
// External
import pick from 'lodash/pick';
import { message } from 'antd';
import { Observable } from 'rxjs/Observable';

/**
 * @description - search github repo
 *
 * @param {string} keyword
 *
 * @return {*}
 */
// eslint-disable-next-line import/prefer-default-export
export default function requestRepoSearch(keyword) {
  const url = `https://api.github.com/search/repositories?q=${keyword}`;
  const init = { mode: 'cors' };
  const fields = ['id', 'full_name', 'description', 'html_url', 'stargazers_count', 'language'];
  return Observable.create((observer) => {
    // Notify fetch start
    observer.next({ repoSearchRequesting: true });
    fetch(url, init)
      .then((res) => res.json())
      .then((res) => {
        const items = res.items.map((item) => pick(item, fields));
        message.info('search repo success');
        observer.next({ repos: items });
      })
      .catch(() => {
        message.error('search repo failed');
        // Need to find better way notify http error
        // observer.error(err);
      })
      .then(() => {
        // Notify fetch complete
        observer.next({ repoSearchRequesting: false });
        observer.complete();
      }, () => {
        observer.next({ repoSearchRequesting: false });
        observer.complete();
      });
  });
}
