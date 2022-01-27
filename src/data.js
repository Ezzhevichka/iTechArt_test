const data = [
    {
        id: 1,
        title: 'Я полагаю, что мог бы внести большой вклад на такой работе, где…',
        cases: [
            {
                question: 'хорошая заработная плата и прочие виды вознаграждений',
                category: 1,
            },
            {
                question: 'имеется возможность установить хорошие взаимоотношения с коллегами по работе',
                category: 5,
            },
            {
                question: 'я мог бы влиять на принятие решений и демонстрировать свои достоинства как работника',
                category: 8,
            },
            {
                question: 'у меня есть возможность совершенствоваться и расти как личность',
                category: 11,
            }
        ],
    },
    {
        id: 2,
        title: 'Я не хотел бы работать там, где…',
        cases: [
            {
                question: 'отсутствуют четкие указания, что от меня требуется',
                category: 3,
            },
            {
                question: 'практически отсутствуют обратная связь и оценка эффективности моей работы',
                category: 6,
            },
            {
                question: 'то, чем я занимаюсь, выглядит малополезным и малоценным',
                category: 12,
            },
            {
                question: 'плохие условия работы, слишком шумно или грязно',
                category: 2,
            }
        ],
    },
    {
        id: 3,
        title: 'Для меня важно, чтобы моя работа…',
        cases: [
            {
                question: 'была связана со значительным разнообразием и переменами',
                category: 9,
            },
            {
                question: 'давала мне возможность работать с широким кругом людей',
                category: 4,
            },
            {
                question: 'обеспечивала мне четкие указания, чтобы я знал, что от меня требуется',
                category: 3,
            },
            {
                question: 'позволяла мне хорошо узнать тех людей, с которыми я работаю',
                category: 5,
            }
        ],
    },
    {
        id: 4,
        title: 'Я полагаю, что я не был бы очень заинтересован работой, которая…',
        cases: [
            {
                question: 'обеспечивала бы мне мало контактов с другими людьми',
                category: 4,
            },
            {
                question: 'едва ли была бы замечена другими людьми',
                category: 6,
            },
            {
                question: 'не имела бы конкретных очертаний, так что я не был бы уверен, что от меня требуется',
                category: 3,
            },
            {
                question: 'была бы сопряжена с определенным объемом рутинных операций',
                category: 9,
            }
        ],
    },
    {
        id: 5,
        title: 'Работа мне нравится, если…',
        cases: [
            {
                question: 'я четко представляю себе, что от меня требуется',
                category: 3,
            },
            {
                question: 'у меня удобное рабочее место и меня мало отвлекают',
                category: 2,
            },
            {
                question: 'у меня хорошие вознаграждения и заработная плата',
                category: 1,
            },
            {
                question: 'позволяет мне совершенствовать свои профессиональные качества',
                category: 11,
            }
        ],
    },
    {
        id: 6,
        title: 'Полагаю, что мне бы понравилось, если…',
        cases: [
            {
                question: 'были бы хорошие условия работы, и отсутствовало бы давление на меня',
                category: 2,
            },
            {
                question: 'у меня был бы очень хороший оклад',
                category: 1,
            },
            {
                question: 'работа в действительности была бы полезная и приносила мне удовольствие',
                category: 12,
            },
            {
                question: 'мои достижения и работа оценивались бы по достоинству',
                category: 6,
            }
        ],
    },
    {
        id: 7,
        title: 'Я не считаю, что работа должна…',
        cases: [
            {
                question: 'быть слабо структурированной, так что непонятно, что же следует делать',
                category: 3,
            },
            {
                question: 'предоставлять слишком мало возможностей хорошо узнать других людей',
                category: 5,
            },
            {
                question: 'быть малозначимой и малополезной для общества или неинтересной для выполнения',
                category: 12,
            },
            {
                question: 'оставаться непризнанной или ее выполнение должно восприниматься как само собой разумеющееся',
                category: 6,
            }
        ],
    },
    {
        id: 8,
        title: 'Работа, приносящая удовлетворение…',
        cases: [
            {
                question: 'связана со значительным разнообразием, переменами и стимуляцией энтузиазма',
                category: 9,
            },
            {
                question: 'дает возможность совершенствовать свои профессиональные качества и развиваться как личность',
                category: 11,
            },
            {
                question: 'является полезной и значимой для общества',
                category: 12,
            },
            {
                question: 'позволяет мне быть креативным (проявлять творческий подход) и экспериментировать с новыми идеями',
                category: 10,
            }
        ],
    },
    {
        id: 9,
        title: ' Важно, чтобы работа…',
        cases: [
            {
                question: 'признавалась и ценилась организацией, в которой я работаю',
                category: 6,
            },
            {
                question: 'давала бы возможности для персонального роста и совершенствования',
                category: 11,
            },
            {
                question: 'была сопряжена с большим разнообразием и переменами',
                category: 9,
            },
            {
                question: 'позволяла бы работнику оказывать влияние на других',
                category: 8,
            }
        ],
    },
    {
        id: 10,
        title: 'Я не считаю, что работа будет приносить удовлетворение, если…',
        cases: [
            {
                question: 'в процессе ее выполнения мало возможностей осуществлять контакты с разными людьми',
                category: 4,
            },
            {
                question: 'оклад и вознаграждение не очень хорошие',
                category: 1,
            },
            {
                question: 'я не могу устанавливать и поддерживать добрые отношения с коллегами по работе',
                category: 5,
            },
            {
                question: 'у меня очень мало самостоятельности или возможностей для проявления гибкости',
                category: 11,
            }
        ],
    },
    {
        id: 11,
        title: 'Самой хорошей является такая работа, которая…',
        cases: [
            {
                question: 'обеспечивает хорошие рабочие условия',
                category: 2,
            },
            {
                question: 'дает четкие инструкции и разъяснения по поводу содержания работы',
                category: 3,
            },
            {
                question: 'предполагает выполнение интересных и полезных заданий',
                category: 12,
            },
            {
                question: 'позволяет получить признание личных достижений и качества работы',
                category: 6,
            }
        ],
    },
    {
        id: 12,
        title: 'Вероятно, я не буду хорошо работать, если…',
        cases: [
            {
                question: 'имеется мало возможностей ставить перед собой цели и достигать их',
                category: 7,
            },
            {
                question: 'я не имею возможности совершенствовать свои личные качества',
                category: 11,
            },
            {
                question: 'тяжелая работа не получает признания и соответствующего вознаграждения',
                category: 6,
            },
            {
                question: 'на рабочем месте пыльно, грязно или шумно',
                category: 2,
            }
        ],
    },
    {
        id: 13,
        title: ' При определении служебных обязанностей важно…',
        cases: [
            {
                question: 'дать людям возможность лучше узнать друг друга',
                category: 5,
            },
            {
                question: 'предоставить работнику возможность ставить цели и достигать их',
                category: 7,
            },
            {
                question: 'обеспечить условия для проявления работниками творческого начала',
                category: 10,
            },
            {
                question: 'обеспечить комфортность и чистоту места работы',
                category: 2,
            }
        ],
    },
    {
        id: 14,
        title: 'Вероятно, я не захочу работать там, где…',
        cases: [
            {
                question: 'у меня будет мало самостоятельности и возможностей для совершенствования своей личности',
                category: 11,
            },
            {
                question: 'не поощряются исследования и проявления научного любопытства',
                category: 10,
            },
            {
                question: 'очень мало контактов с широким кругом людей',
                category: 4,
            },
            {
                question: 'отсутствуют достойные надбавки и дополнительные льгот',
                category: 1,
            }
        ],
    },
    {
        id: 15,
        title: 'Я был бы удовлетворен, если…',
        cases: [
            {
                question: 'была бы возможность оказывать влияние на принятие решений другими работниками',
                category: 8,
            },
            {
                question: 'работа предоставляла бы широкое разнообразие и перемены',
                category: 9,
            },
            {
                question: 'мои достижения были бы оценены другими людьми',
                category: 6,
            },
            {
                question: 'я точно знал бы, что от меня требуется и как я должен это выполнять',
                category: 3,
            }
        ],
    },
    {
        id: 16,
        title: 'Работа меньше удовлетворяла бы меня, если…',
        cases: [
            {
                question: 'не позволяла бы ставить и добиваться сложных целей',
                category: 7,
            },
            {
                question: 'четко не знал бы правил и процедур выполнения работы',
                category: 3,
            },
            {
                question: 'уровень оплаты моего труда не соответствовал бы уровню сложности выполняемой работы',
                category: 1,
            },
            {
                question: 'я практически не мог бы влиять на принимаемые решения и на то, что делают другие',
                category: 8,
            }
        ],
    },
    {
        id: 17,
        title: 'Я полагаю, что должность должна предоставлять…',
        cases: [
            {
                question: 'четкие должностные инструкции и указания на то, что от меня требуется',
                category: 3,
            },
            {
                question: 'возможность лучше узнать своих коллег по работе;',
                category: 5,
            },
            {
                question: 'возможности выполнять сложные производственные задания, требующие напряжения всех сил',
                category: 7,
            },
            {
                question: 'разнообразие, перемены и поощрения',
                category: 9,
            }
        ],
    },
    {
        id: 18,
        title: 'Работа приносила бы меньше удовлетворения, если…',
        cases: [
            {
                question: 'не допускала бы возможности хотя бы небольшого творческого вклада',
                category: 10,
            },
            {
                question: 'осуществлялась бы изолированно, т. е. я должен был бы работать в одиночестве',
                category: 4,
            },
            {
                question: 'отсутствовал бы благоприятный внутренний климат, в котором я мог бы профессионально расти',
                category: 11,
            },
            {
                question: 'не давала бы возможности оказывать влияние на принятие решений',
                category: 8,
            }
        ],
    },
    {
        id: 19,
        title: ' Я хотел бы работать там, где…',
        cases: [
            {
                question: 'другие люди признают и ценят выполняемую мной работу',
                category: 6,
            },
            {
                question: 'у меня будет возможность оказывать влияние на то, что делают другие',
                category: 8,
            },
            {
                question: 'имеется достойная система надбавок и дополнительных льгот',
                category: 1,
            },
            {
                question: 'можно выдвигать и апробировать новые идеи и проявлять креативность',
                category: 10,
            }
        ],
    },
    {
        id: 20,
        title: 'Вряд ли я захотел бы работать там, где…',
        cases: [
            {
                question: 'не существует разнообразия или перемен в работе',
                category: 9,
            },
            {
                question: 'у меня будет мало возможностей влиять на принимаемые решения',
                category: 8,
            },
            {
                question: 'заработная плата не слишком высока',
                category: 1,
            },
            {
                question: 'условия работы недостаточно хорошие',
                category: 2,
            }
        ],
    },
    {
        id: 21,
        title: 'Я полагаю, что приносящая удовлетворение работа должна предусматривать...',
        cases: [
            {
                question: 'наличие четких указаний, чтобы работники знали, что от них требуется',
                category: 3,
            },
            {
                question: 'возможность проявлять креативность (творческий подход)',
                category: 10,
            },
            {
                question: 'возможность встречаться с интересными людьми',
                category: 4,
            },
            {
                question: 'чувство удовлетворения и действительно интересные задания',
                category: 12,
            }
        ],
    },
    {
        id: 22,
        title: 'Работа не будет доставлять удовольствие, если…',
        cases: [
            {
                question: 'предусмотрены незначительные надбавки и дополнительные льготы',
                category: 1,
            },
            {
                question: 'условия работы некомфортны или в помещении очень шумно',
                category: 2,
            },
            {
                question: 'не будет возможности сравнивать свою работу с работой других',
                category: 8,
            },
            {
                question: 'не поощряются исследования, творческий подход и новые идеи',
                category: 10,
            }
        ],
    },
    {
        id: 23,
        title: 'Я считаю важным, чтобы работа обеспечивала мне…',
        cases: [
            {
                question: 'множество контактов с широким кругом интересных мне людей',
                category: 4,
            },
            {
                question: 'возможность установления и достижения целей',
                category: 7,
            },
            {
                question: 'возможность влиять на принятие решений',
                category: 8,
            },
            {
                question: 'высокий уровень заработной платы',
                category: 1,
            }
        ],
    },
    {
        id: 24,
        title: 'Я не думаю, что мне нравилась бы работа, если…',
        cases: [
            {
                question: 'условия работы некомфортны, на рабочем месте грязно или шумно',
                category: 2,
            },
            {
                question: 'мало шансов влиять на других людей',
                category: 8,
            },
            {
                question: 'мало возможностей для достижения поставленных целей',
                category: 7,
            },
            {
                question: 'я не мог бы проявлять креативность (творчество) и предлагать новые идеи',
                category: 10,
            }
        ],
    },
    {
        id: 25,
        title: 'В процессе организации работы важно…',
        cases: [
            {
                question: 'обеспечить чистоту и комфортность рабочего места',
                category: 2,
            },
            {
                question: 'создать условия для проявления самостоятельности',
                category: 11,
            },
            {
                question: 'предусмотреть возможность разнообразия и перемен',
                category: 9,
            },
            {
                question: 'обеспечить широкие возможности контактов с другими людьми',
                category: 4,
            }
        ],
    },
    {
        id: 26,
        title: 'Скорее всего, я не захотел бы работать там, где…',
        cases: [
            {
                question: 'условия работы некомфортны, т. е. шумно, грязно и т. д.',
                category: 2,
            },
            {
                question: 'мало возможностей осуществлять контакты с другими людьми',
                category: 4,
            },
            {
                question: 'работа не является интересной или полезной',
                category: 12,
            },
            {
                question: 'работа рутинная и задания редко меняются',
                category: 9,
            }
        ],
    },
    {
        id: 27,
        title: 'Работа приносит удовлетворение, вероятно, когда…',
        cases: [
            {
                question: 'люди признают и ценят хорошо выполненную работу',
                category: 6,
            },
            {
                question: 'существуют широкие возможности для маневра и проявления гибкости',
                category: 11,
            },
            {
                question: 'можно ставить перед собой сложные и смелые цели',
                category: 7,
            },
            {
                question: 'существует возможность лучше узнать своих коллег',
                category: 5,
            }
        ],
    },
    {
        id: 28,
        title: 'Мне бы не понравилась работа, которая…',
        cases: [
            {
                question: 'не была бы полезной и не приносила бы чувства удовлетворения',
                category: 12,
            },
            {
                question: 'не содержала бы в себе стимула к переменам',
                category: 9,
            },
            {
                question: 'не позволяла бы мне устанавливать дружеские отношения с другими',
                category: 5,
            },
            {
                question: 'была бы неконкретной и не ставила бы сложных задач',
                category: 7,
            }
        ],
    },
    {
        id: 29,
        title: 'Я бы проявил стремление работать там, где…',
        cases: [
            {
                question: 'работа интересная и полезная',
                category: 12,
            },
            {
                question: 'люди могут устанавливать длительные дружеские взаимоотношения',
                category: 5,
            },
            {
                question: 'меня окружали бы интересные люди',
                category: 4,
            },
            {
                question: 'я мог бы оказывать влияние на принятие решений',
                category: 8,
            }
        ],
    },
    {
        id: 30,
        title: 'Я не считаю, что работа должна…',
        cases: [
            {
                question: 'предусматривать, чтобы человек большую часть времени работал в одиночку',
                category: 4,
            },
            {
                question: 'давать мало шансов на признание личных достижений работника',
                category: 6,
            },
            {
                question: 'препятствовать установлению взаимоотношений с коллегами',
                category: 5,
            },
            {
                question: 'состоять в основном из рутинных обязанностей',
                category: 9,
            }
        ],
    },
    {
        id: 31,
        title: 'Хорошо спланированная работа обязательно…',
        cases: [
            {
                question: 'предусматривает достаточный набор льгот и множество надбавок',
                category: 1,
            },
            {
                question: 'имеет четкие рекомендации по выполнению и должностные обязанности',
                category: 3,
            },
            {
                question: 'предусматривает возможность ставить цели и достигать их',
                category: 7,
            },
            {
                question: 'стимулирует и поощряет выдвижение новых идей',
                category: 10,
            }
        ],
    },
    {
        id: 32,
        title: 'Я считал бы, что работа не приносит удовлетворения, если…',
        cases: [
            {
                question: 'не мог бы выполнять сложную перспективную работу',
                category: 7,
            },
            {
                question: 'было бы мало возможностей для проявления креативности',
                category: 10,
            },
            {
                question: 'допускалась бы лишь малая доля самостоятельности',
                category: 11,
            },
            {
                question: 'сама суть работы не представлялась бы полезной или нужной',
                category: 12,
            }
        ],
    },
    {
        id: 33,
        title: 'Наиболее важными характеристиками должности являются…',
        cases: [
            {
                question: 'возможность для творческого подхода и оригинального нестандартного мышления',
                category: 10,
            },
            {
                question: 'важные обязанности, выполнение которых приносит удовлетворение',
                category: 12,
            },
            {
                question: 'возможность устанавливать хорошие взаимоотношения с коллегами',
                category: 5,
            },
            {
                question: 'наличие значимых целей, которых призван достичь работник',
                category: 7,
            }
        ],
    },
];

const categoryNames = [
    'Вознаграждение',
    'Условия работы',
    'Структурирование работы',
    'Социальные контакты',
    'Взаимоотношения',
    'Признание',
    'Достижения',
    'Власть и влиятельность',
    'Разнообразие',
    'Креативность',
    'Самосоверешенствование',
    'Интересная работа'
];

export { data, categoryNames };
