import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
        let Component;

        beforeEach(() => {
            const props = { comments: ['New comment', 'Other New Comment'] };
            Component = renderComponent(CommentList, null, props);
        });

        it('Shows an LI for each component', () => {
            expect(Component.find('li').length).to.equal(2)
        });

        it('Shows each comment that is provided', () => {
            expect(Component).to.contain('New comment');
            expect(Component).to.contain('Other New Comment');
        });
});