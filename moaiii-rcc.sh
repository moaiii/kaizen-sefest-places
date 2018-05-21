# create a component in the src/ components folder
echo $1
pwd

directory='./src/components/'$1
component='./src/components/'$1'/'$1'.js'
styles='./src/components/'$1'/'$1'.scss'
stylesmain='./src/stylesheet/main.scss'
reducer='./src/components/'$1'/'$1'.reducer.js'
store='./src/store.js'
actions='./src/components/'$1'/'$1'.action.js'
test='./src/components/'$1'/'$1'.test.js'

mkdir $directory
touch $component
touch $styles
touch $reducer
touch $actions
touch $test

# add to main.scss file
echo '\n@import "../components/'$1'/'$1'.scss";' >> $stylesmain

# boiler plate for test files
echo 'import reducer from "./'$1'.reducer";' >> $test
echo 'import action from "./'$1'.action";' >> $test
echo '\ndescribe("'$1'", () => {' >> $test
echo '  it("", () => {' >> $test
echo '    expect();' >> $test
echo '  })' >> $test
echo '})' >> $test

# reducer boilerplate
echo '// @flow' >> $reducer
echo 'type State = {' >> $reducer
echo '  // +value: boolean ' >> $reducer
echo '};' >> $reducer
echo '\ntype Action = {' >> $reducer
echo ' +type: string' >> $reducer
echo '}' >> $reducer
echo '\nlet initialState = {};' >> $reducer
echo '\nexport default (state: State = initialState, action: Action): State => {' >> $reducer
echo '  switch (action.type) {' >> $reducer
echo '\n  case "something": {' >> $reducer
echo '      return state;' >> $reducer
echo '    }' >> $reducer
echo '\n  default: {' >> $reducer
echo '      return state;' >> $reducer
echo '    }' >> $reducer
echo '  }' >> $reducer
echo '};' >> $reducer

# add to the store.js in src root
echo 'import '$1'Reducer from "./components/'$1'/'$1'.reducer.js"' > src/store_copy.txt
cat $store >> src/store_copy.txt
rm $store
mv src/store_copy.txt $store


# actions boilerplate
echo '// @flow' >> $actions
echo 'type FooAction = { type: "FOO", foo: number };' >> $actions
echo '\ntype Action =' >> $actions
echo '  | FooAction;' >> $actions
echo '\nexport const foo = (value: number): FooAction => {' >> $actions
echo '  return { type: "FOO", foo: value };' >> $actions
echo '}' >> $actions