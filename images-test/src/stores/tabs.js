import { fromJS } from 'immutable';

export const ADD_VIEW = 'ADD_VIEW';

const defaultState =
  fromJS([
    {
      title: 'tab first',
      content: 'Tab 1 ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto assumenda debitis fugiat id inventore, laudantium maiores nam nemo porro quae quasi quo reiciendis sunt tenetur ullam veniam vitae.</span><span>Ab accusamus animi architecto assumenda consequuntur culpa dolores eligendi, esse expedita explicabo ipsa laudantium minima molestias non perspiciatis quae quidem quod repellat saepe sint tempora ullam unde velit veniam, veritatis.</span><span>Autem beatae, corporis culpa deserunt dolorem doloremque eaque enim eos, error eum ipsam libero nihil nobis pariatur qui quod recusandae reiciendis rem saepe similique sit tenetur velit vero. Hic, soluta!</span><span>Aliquam beatae est eveniet expedita fuga laboriosam nam optio praesentium qui sequi! A alias consectetur dolorem doloribus ducimus, esse ex facere facilis fugiat itaque laboriosam odit quo repudiandae vel, voluptate?</span><span>Accusantium alias aperiam dolor doloremque, earum illo optio quis sequi. Accusamus aspernatur consequatur ea est eum eveniet fugiat maxime nostrum officia, quasi qui quis reprehenderit sapiente soluta veritatis voluptatem voluptatum!</span><span>Accusantium ad amet dolorem dolorum eaque eligendi enim eveniet expedita incidunt itaque labore laboriosam libero nesciunt obcaecati officia officiis perferendis perspiciatis possimus provident quos repudiandae sed suscipit, tempore temporibus voluptate?</span><span>Beatae commodi consequatur hic iste iusto, maxime, minus molestiae nam neque, nihil nisi provident quos repellendus sequi sunt tempora ut. A alias aliquid ea eligendi exercitationem numquam quo ratione repellat.</span><span>Aperiam eligendi error fuga, mollitia natus provident quod rerum sapiente tenetur velit! Adipisci aliquid asperiores aspernatur beatae delectus inventore itaque obcaecati odio perspiciatis placeat quod quos rerum, sit tenetur vitae.</span><span>Cum distinctio neque odit. Architecto commodi consectetur, earum ipsum laboriosam minima neque quia rem, saepe sit temporibus veniam? Aliquam at debitis ea eius facere libero maxime mollitia voluptatem. Natus, quasi?</span><span>Amet aperiam blanditiis commodi corporis cum incidunt maxime nemo repudiandae similique sunt. Amet architecto autem commodi consectetur consequatur dolorem, doloremque inventore modi molestias nam quam quos ratione reiciendis veritatis voluptatibus?',
      background: '#FFAA17'
    },
    {
      title: 'tab 2',
      content: 'Tab 2 ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto assumenda debitis fugiat id inventore, laudantium maiores nam nemo porro quae quasi quo reiciendis sunt tenetur ullam veniam vitae.</span><span>Ab accusamus animi architecto assumenda consequuntur culpa dolores eligendi, esse expedita explicabo ipsa laudantium minima molestias non perspiciatis quae quidem quod repellat saepe sint tempora ullam unde velit veniam, veritatis.</span><span>Autem beatae, corporis culpa deserunt dolorem doloremque eaque enim eos, error eum ipsam libero nihil nobis pariatur qui quod recusandae reiciendis rem saepe similique sit tenetur velit vero. Hic, soluta!</span><span>Aliquam beatae est eveniet expedita fuga laboriosam nam optio praesentium qui sequi! A alias consectetur dolorem doloribus ducimus, esse ex facere facilis fugiat itaque laboriosam odit quo repudiandae vel, voluptate?</span><span>Accusantium alias aperiam dolor doloremque, earum illo optio quis sequi. Accusamus aspernatur consequatur ea est eum eveniet fugiat maxime nostrum officia, quasi qui quis reprehenderit sapiente soluta veritatis voluptatem voluptatum!</span><span>Accusantium ad amet dolorem dolorum eaque eligendi enim eveniet expedita incidunt itaque labore laboriosam libero nesciunt obcaecati officia officiis perferendis perspiciatis possimus provident quos repudiandae sed suscipit, tempore temporibus voluptate?</span><span>Beatae commodi consequatur hic iste iusto, maxime, minus molestiae nam neque, nihil nisi provident quos repellendus sequi sunt tempora ut. A alias aliquid ea eligendi exercitationem numquam quo ratione repellat.</span><span>Aperiam eligendi error fuga, mollitia natus provident quod rerum sapiente tenetur velit! Adipisci aliquid asperiores aspernatur beatae delectus inventore itaque obcaecati odio perspiciatis placeat quod quos rerum, sit tenetur vitae.</span><span>Cum distinctio neque odit. Architecto commodi consectetur, earum ipsum laboriosam minima neque quia rem, saepe sit temporibus veniam? Aliquam at debitis ea eius facere libero maxime mollitia voluptatem. Natus, quasi?</span><span>Amet aperiam blanditiis commodi corporis cum incidunt maxime nemo repudiandae similique sunt. Amet architecto autem commodi consectetur consequatur dolorem, doloremque inventore modi molestias nam quam quos ratione reiciendis veritatis voluptatibus?',
      background: '#10C0FF'
    },
    {
      title: 'tab 3',
      content: 'Tab 3 ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam architecto assumenda debitis fugiat id inventore, laudantium maiores nam nemo porro quae quasi quo reiciendis sunt tenetur ullam veniam vitae.</span><span>Ab accusamus animi architecto assumenda consequuntur culpa dolores eligendi, esse expedita explicabo ipsa laudantium minima molestias non perspiciatis quae quidem quod repellat saepe sint tempora ullam unde velit veniam, veritatis.</span><span>Autem beatae, corporis culpa deserunt dolorem doloremque eaque enim eos, error eum ipsam libero nihil nobis pariatur qui quod recusandae reiciendis rem saepe similique sit tenetur velit vero. Hic, soluta!</span><span>Aliquam beatae est eveniet expedita fuga laboriosam nam optio praesentium qui sequi! A alias consectetur dolorem doloribus ducimus, esse ex facere facilis fugiat itaque laboriosam odit quo repudiandae vel, voluptate?</span><span>Accusantium alias aperiam dolor doloremque, earum illo optio quis sequi. Accusamus aspernatur consequatur ea est eum eveniet fugiat maxime nostrum officia, quasi qui quis reprehenderit sapiente soluta veritatis voluptatem voluptatum!</span><span>Accusantium ad amet dolorem dolorum eaque eligendi enim eveniet expedita incidunt itaque labore laboriosam libero nesciunt obcaecati officia officiis perferendis perspiciatis possimus provident quos repudiandae sed suscipit, tempore temporibus voluptate?</span><span>Beatae commodi consequatur hic iste iusto, maxime, minus molestiae nam neque, nihil nisi provident quos repellendus sequi sunt tempora ut. A alias aliquid ea eligendi exercitationem numquam quo ratione repellat.</span><span>Aperiam eligendi error fuga, mollitia natus provident quod rerum sapiente tenetur velit! Adipisci aliquid asperiores aspernatur beatae delectus inventore itaque obcaecati odio perspiciatis placeat quod quos rerum, sit tenetur vitae.</span><span>Cum distinctio neque odit. Architecto commodi consectetur, earum ipsum laboriosam minima neque quia rem, saepe sit temporibus veniam? Aliquam at debitis ea eius facere libero maxime mollitia voluptatem. Natus, quasi?</span><span>Amet aperiam blanditiis commodi corporis cum incidunt maxime nemo repudiandae similique sunt. Amet architecto autem commodi consectetur consequatur dolorem, doloremque inventore modi molestias nam quam quos ratione reiciendis veritatis voluptatibus?',
      background: '#FF9CFD'
    },
  ]);


export default function (state = defaultState, action) {
  switch (action.type) {
    case ADD_VIEW:
      console.info('add view', action.payload.count);
      return {
        views: state.views.map((item, key) => {
          return item + 1;
        })
      };
    default:
      return state;
  }
}

export function addView(count = 1) {
  return {
    type: ADD_VIEW,
    payload: {count: count}
  }
}

