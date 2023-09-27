# react-flex-center
A React component library for easily centering elements using flexbox.
![npm](https://img.shields.io/npm/v/react-flex-center)
![license](https://img.shields.io/npm/l/react-flex-center)

`react-flex-center` is a flexible React component that makes it easy to center content using flexbox. Whether you're aligning items horizontally, vertically, or both, `react-flex-center` has got you covered. It's lightweight, customizable, and inherits `all` the properties of a `div` element, making styling a breeze.

## Installation

```sh
npm install react-flex-center
```
or
```sh
yarn add react-flex-center
```

## Usage

### Step 1: Import CSS
Firstly, import the necessary CSS file in your App.tsx or index.tsx (or .js):
```jsx
import 'react-flex-center/src/index.css';
```
### Step 2: Use the Component
Now, you can use the `FlexCenter` component in your React application:
```jsx
import FlexCenter from 'react-flex-center';

function App() {
  return (
    <FlexCenter>
      <div>Your Centered Content</div>
    </FlexCenter>
  );
}
```
# Props of FlexCenter Component

The `FlexCenter` component inherits all the properties of a `div` element, allowing for easy customization and styling. Additionally, it has a specific prop to control the direction of centering:

| Prop        | Type                                         | Default | Description                                                                                           |
|-------------|----------------------------------------------|---------|-------------------------------------------------------------------------------------------------------|
| `centering` | `'horizontal'` \| `'vertical'` \| `'both'`   | `'both'` | Specifies the direction in which to center the child elements: horizontally (`'horizontal'`), vertically (`'vertical'`), or both (`'both'`). |

## Usage Example

You can also include images or any other elements as children of the `FlexCenter` component, and use other `div` properties like `id`, `className`, and `style` for further customization:

```jsx
import FlexCenter from 'react-flex-center';

function ExampleComponent() {
  return (
    <FlexCenter centering="both" id="example" className="custom-class" style={{ backgroundColor: 'lightgrey' }}>
      <img src="your-image-source" alt="Your Image" />
      <div>Your Centered Content</div>
    </FlexCenter>
  );
}
```
## About the Author

This component library is developed and maintained by [zqsun](https://github.com/zqsun0). If you encounter any issues or have suggestions, please feel free to open an issue on the [GitHub repository](https://github.com/zqsun0/react-flex-center).

