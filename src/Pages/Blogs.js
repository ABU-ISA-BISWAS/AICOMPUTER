import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left px-10 py-10'>
            <h1 className='text-xl font-bold'>How will you improve the performance of a React Application?</h1>
            <p>React enables web applications to update their user interfaces (UIs) quickly, but that does not mean your medium or large React application will perform efficiently. Its performance will depend on how you use React when building it, and on your understanding of how React operates and the process through which components live through the various phases of their lifecycle. React offers a lot of performance improvements to a web app, and you can achieve these improvements through various techniques, features, and tools.</p>

            <h1 className='text-xl font-bold'> What are the different ways to manage a state in a React application?</h1>
            <p>The purpose of building the application with components is to have a modular architecture, with a clear separation of concerns. This makes code easier to understand, easier to maintain, and easier to reuse when possible.

                The state is an object that holds information about a certain component. Plain JavaScript functions don't have the ability to store information. The code within them executes and "dissapears" once the execution is finished.</p>

                <h1 className='text-xl font-bold'> How does prototypical inheritance work?</h1>
                <p>
                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.
                </p>
                <h1 className='text-xl font-bold'> What is a unit test? Why should write unit tests?</h1>
                <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>

        </div>
    );
};

export default Blogs;