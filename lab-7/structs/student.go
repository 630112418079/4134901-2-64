package structs

import "fmt"

type Student struct {
	id   int
	name string
	age  int
}

func Learn() {

	james := Student{
		id:   1,
		name: "James",
		age:  15,
	}

	//slide
	Student := []Student{
		{id: 2, name: "john", age: 20},
		{id: 3, name: "Xina", age: 18},
	}

	fmt.Println(james.name)
	fmt.Println(Student[0].name, Student[1].name)

	v := Vertex{4.20, 3.1}
	fmt.Printf("%v", v.Area())

	fmt.Println(v)
	v.Scale(10)
	fmt.Println(v)

}

//////////////////////////Area/////////////////////////////
type Vertex struct {
	X, Y float32
}

func (v Vertex) Area() float32 {
	return v.X * v.Y
}

func (v *Vertex) Scale(f float32) {
	v.X = v.X * f
	v.Y = v.Y * f
}
