# Introduction-to-Algorithms

## Introduce Origin of this library
Some implementations of the topics in Introduction to Algorithms and some reflections on the content of the book, if there is anything wrong, please correct me.
#

## Preliminary preparation

Before implementing and understanding this book, we need to have some mathematical foundation, and some tools to run our code.

We choose python to implement various algorithms, and we will also use some TS languages. If there is a need later, we will use more languages(most likely TS) to implement.
#
## Environmental preparation

For a better user experience, we will install some version management and running environment/running tools.

We will also add some testing tools in the future for a better learning experience

Just google it and install.

If you need to add new languages later, please add them to the list below according to the format: version manager; running environment; running tools (if the running environment is already installed, such as js and ts)

If there is none, it will be empty and separated by ";"

python: pyenv; python;

js: nvm; node;

ts: ;node; ts-node
#
## Preparation of basic knowledge of mathematics

some basic knowledge of mathematics need to learn

    Summations

        Summation formulas and properties
        Bounding summations

    Sets and discrete mathematics

        Sets
        Relations
        Functions
        Graphs
        Trees

    Counting and Probability

        Counting
        Probability
        Discrete random variables
        The geometric and binomial distributions
        The tails of the binomial distribution

    Matrices

        Matrices and matrix operations
        Basic matrix properties

# 

## If you're ready, let's get started 

We will go through the writing of all the algorithms in the book chapter by chapter, including thought problems and practice problems.

### First of all 

we need to know what is algorithm

    Informally, an algorithm is any well-defined computational procedure that takes some value, or set of values, as input and produces some value, or set of values, as output.
    An algorithm is thus a sequence of computational steps that transform the input into the output.

as the same 

    an algorithm is a tool for solving a well-specified computational problem.

properties

    correctly solve the given computational problem

common interesting algorithmic problems:

    1.They have many candidate solutions, the overwhelming majority of which do not solve the problem at hand. Finding one that does, or one that is “best,” can present quite a challenge.

    2. They have practical applications. Of the problems in the above list, finding the shortest path provides the easiest examples. A transportation firm, such as a trucking or railroad company, has a financial interest in finding shortest paths through a road or rail network because taking shorter paths results in lower labor and fuel costs. Or a routing node on the Internet may need to find the shortest path through the network in order to route a message quickly. Or a person wishing to drive from New York to Boston may want to find driving directions from an appropriate Web site, or she may use her GPS while driving.

loop invariant:

    Initialization: It is true prior to the first iteration of the loop.

    Maintenance: If it is true before an iteration of the loop, it remains true before the
    next iteration.

    Termination: When the loop terminates, the invariant gives us a useful property that helps show that the algorithm is correct.


## some algorithms contain

    iterative method
    recursive method
